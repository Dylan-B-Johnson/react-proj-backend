const PORT = 4002;

const Joi = require("joi");
const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.static("public"));

mongoose.connect("mongodb+srv://maxbear123:Backhand7-Python-Talisman@cluster0.s3abr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log("Connected to DB."))
        .catch((error) => console.log(`Couldn't connect to DB: ${error}`))

const recipeSchema = new mongoose.Schema({
        name: String,
        cone: String,
        link: String,
        credit: String,
        image: String,
        recipe: [{material: String, amount: String}]
});

const workSchema = new mongoose.Schema({
        year: Number,
        image: String,
        hangs: Boolean,
        cone: String,
        highResPNG: Boolean
});

const Piece = mongoose.model("Piece", workSchema);

const Recipe = mongoose.model("Recipe", recipeSchema);

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

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

app.get("/api/work", async(req, res) => {
        res.send(await Piece.find());
});

app.post("/api/recipes", upload.single("image"), async(req, res) => {
        const result = validateRecipe(req.body);
        if (result.error) {
                res.status(400).send(result.error.details[0].message);
                return;
        }
        const fixedJSON = fixJSON(req, false, null);
        const newRecipe = new Recipe({
                name: fixedJSON.name,
                credit: fixedJSON.credit,
                link: fixedJSON.link,
                cone: fixedJSON.cone,
                recipe: fixedJSON.recipe,
                image: fixedJSON.image,
        });
        const id = fixedJSON
        res.status(200).send(await newRecipe.save());
});

app.get("/api/recipes", async(req, res) => {
        res.send(await Recipe.find());
});

app.delete("/api/recipes/:id", async(req, res) => {
        let recipe;
        try {
                recipe = await Recipe.findByIdAndDelete(req.params.id);
                if (!recipe) {
                        res.status(404).send("No recipe with the provided id was found.");
                        return;
                }
        } catch (error) {
                res.status(404).send("No recipe with the provided id was found.");
                return;
        }
        // delete the image
        fs.rmSync("./public/" + recipe.image.substring(1), {
            force: true,
        });
        res.status(200).send(recipe);
});

app.put("/api/recipes/:id", upload.single("image"), async(req,res) => {
        let recipe;
        try {
                recipe = Recipe.findOne({_id: req.params.id});
                if (!recipe) {
                        res.status(404).send("No recipe with the provided id was found.");
                        return;
                }
        } catch (e) {
                res.status(404).send("No recipe with the provided id was found.");
                return;
        }
        const result = validateRecipe(req.body);
        if (result.error) {
                res.status(400).send(result.error.details[0].message);
                return;
        }
        const fixedJSON = fixJSON(req, true, recipe);
        const updatedRecipe = new Recipe({
                name: fixedJSON.name,
                credit: fixedJSON.credit,
                link: fixedJSON.link,
                cone: fixedJSON.cone,
                recipe: fixedJSON.recipe,
                image: fixedJSON.image,
        });
        await Recipe.updateOne({_id: req.params.id}, fixedJSON);
        res.status(200).send(await Recipe.findOne({_id: req.params.id}));
});

app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
});
