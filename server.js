const PORT = 4002;

const Joi = require("joi");
const multer = require("multer");
const work = require("./work.js");
const users = require("./users.js");
const recipes = require("./recipes.js");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.static("public"));

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const getMaxIdx = () => {
        let max = -1;
        recipes.recipes.forEach((recipe) => {
                if (recipe._id > max) {
                        max = recipe._id;
                }
        });
        return max;
};

const firstUnusedInsert = () => {
        let i = 0;
        recipes.recipes.forEach((recipe) => {
                if (recipe._id != i) {
                        return i;
                }
                i++;
        });
        return recipes.recipes.length;
};

const validateRecipe = (recipe) => {
        const schema = Joi.object({
                name: Joi.string().min(1).required(),
                cone: Joi.string().min(1).required(),
                material0: Joi.string().min(1).required(),
                amount0: Joi.number().min(0).required(),
                material1: Joi.string().min(1),
                amount1: Joi.number().min(0),
                material2: Joi.string().min(1),
                amount2: Joi.number().min(0),
                material3: Joi.string().min(1),
                amount3: Joi.number().min(0),
                material4: Joi.string().min(1),
                amount4: Joi.number().min(0),
                material5: Joi.string().min(1),
                amount5: Joi.number().min(0),
                material6: Joi.string().min(1),
                amount6: Joi.number().min(0),
                material7: Joi.string().min(1),
                amount7: Joi.number().min(0),
                material8: Joi.string().min(1),
                amount8: Joi.number().min(0),
                material9: Joi.string().min(1),
                amount9: Joi.number().min(0),
                material10: Joi.string().min(1),
                amount10: Joi.number().min(0),
                amount11: Joi.number().min(0),
                material11: Joi.string().min(1),
                amount12: Joi.number().min(0),
                material12: Joi.string().min(1),
                amount13: Joi.number().min(0),
                material13: Joi.string().min(1),
                amount14: Joi.number().min(0),
                material14: Joi.string().min(1),
                amount15: Joi.number().min(0),
                material15: Joi.string().min(1),
                amount16: Joi.number().min(0),
                material16: Joi.string().min(1),
                amount17: Joi.number().min(0),
                material17: Joi.string().min(1),
                amount18: Joi.number().min(0),
                material18: Joi.string().min(1),
                amount19: Joi.number().min(0),
                material19: Joi.string().min(1),
                link: Joi.string().uri().allow(""),
                credit: Joi.string().allow("")
        });
        return schema.validate(recipe);
};

const fixJSON = (req, put, recipe) => {
        const fixedJSON = {
                _id: put ? req.params.id : getMaxIdx() + 1,
                name: req.body.name,
                recipe: [],
                cone: req.body.cone,
                credit: req.body.credit,
                link: req.body.link
        };
        for (let i = 0; i < 20; i++) {
                if (("material" + i) in req.body && ("amount" + i) in req.body) {
                        const mat = req.body["material" + i];
                        const amnt = req.body["amount" + i];
                        const toPush = {"material": mat, "amount": amnt};
                        fixedJSON.recipe.push(toPush);
                }
        }
        if (req.file) {
                fixedJSON.image = "./images/" + req.file.filename;
        } else {
                fixedJSON.image = recipe.image;
        }
        return fixedJSON;
};

const upload = multer({ storage: store });

app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
});

app.get("/api/work", (req, res) => {
        res.send(work.work);
});

app.post("/api/recipes", upload.single("image"), (req, res) => {
        const result = validateRecipe(req.body);
        if (result.error) {
                res.status(400).send(result.error.details[0].message);
                return;
        }
        const fixedJSON = fixJSON(req, false, null);
        recipes.recipes.push(fixedJSON);
        res.status(200).send(fixedJSON);
});

app.get("/api/recipes", (req, res) => {
        res.send(recipes.recipes);
});

app.delete("/api/recipes/:id", (req, res) => {
        const recipe = recipes.recipes.find((recipe) =>
                recipe._id == parseInt(req.params.id));
        if (!recipe) {
                res.status(404).send("No recipe with the provided id was found.");
                return;
        }
        const index = recipes.recipes.indexOf(recipe);
        // delete the image
        fs.rmSync("./public/" + recipe.image.substring(1), {
            force: true,
        });
        recipes.recipes.splice(index, 1);
        res.status(200).send(recipe);
});

app.put("/api/recipes/:id", upload.single("image"), (req,res) => {
        const recipe = recipes.recipes.find((recipe) =>
                recipe._id == parseInt(req.params.id));
        if (!recipe) {
                res.status(404).send("No recipe with the provided id was found.");
                return;
        }
        const result = validateRecipe(req.body);
        if (result.error) {
                res.status(400).send(result.error.details[0].message);
                return;
        }
        const fixedJSON = fixJSON(req, true, recipe);
        const index = recipes.recipes.indexOf(recipe);
        recipes.recipes[index] = fixedJSON;
        res.status(200).send(fixedJSON);
});

app.get("/api/users", (req, res) => {
        res.send(users.users);
});

app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
});
