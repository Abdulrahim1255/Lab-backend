import express from "express";
import CultureController from "../Controller/CultureController";
import DnaController from "../Controller/DnaController";
import itemController from "../Controller/itemController";
import loginController from "../Controller/loginController";
import PrcController from "../Controller/PrcController";
import ProjectbrucellaController from "../Controller/ProjectbrucellaController";
import registerController from "../Controller/registerController";
import ParasitesController from "../Controller/ParasitesController";
import HPLCController from "../Controller/HPLCController";
import MainController from "../Controller/MainController";
const Router = express.Router();
//--------------Login and Registration-------------------------//
Router.post("/register", registerController.register);
Router.post("/login",loginController.login)


//--------------Hospitalbrucella-------------------------//
Router.get("/item", itemController.items);
Router.post("/add", itemController.add);
Router.put("/update/:id", itemController.update);
Router.delete("/delete/:id", itemController.delete);

//--------------Culture-------------------------//
Router.get("/itemsCulture", CultureController.itemsCulture);
Router.post("/addCulture", CultureController.addCulture);
Router.put("/updateCulture/:id", CultureController.updateCulture);
Router.delete("/deleteCulture/:id", CultureController.deleteCulture);

// //--------------Projectbrucella-------------------------//
Router.get("/itemsProjectbrucella", ProjectbrucellaController.itemsProjectbrucella);
Router.post("/addProjectbrucella", ProjectbrucellaController.addProjectbrucella);
Router.put("/updateProjectbrucella/:id", ProjectbrucellaController.updateProjectbrucella);
Router.delete("/deleteProjectbrucella/:id", ProjectbrucellaController.deleteProjectbrucella);

// //--------------PRC brucella-------------------------//
Router.get("/itemsPrc", PrcController.itemsPrc);
Router.post("/addPrc", PrcController.addPrc);
Router.put("/updatePrc/:id", PrcController.updatePrc);
Router.delete("/deletePrc/:id", PrcController.deletePrc);

// //--------------DNA brucella-------------------------//
Router.get("/itemsDna", DnaController.itemsDna);
Router.post("/addDna", DnaController.addDna);
Router.put("/updateDna/:id", DnaController.updateDna);
Router.delete("/deleteDna/:id", DnaController.deleteDna);



// //--------------Parasites-------------------------//
Router.get("/itemsParasites", ParasitesController.itemsParasites);
Router.post("/addParasites", ParasitesController.addParasites);
Router.put("/updateParasites/:id", ParasitesController.updateParasites);
Router.delete("/deleteParasites/:id", ParasitesController.deleteParasites);

// //--------------HPLC Lab-------------------------//
Router.get("/itemsHPLC", HPLCController.itemsHPLC);
Router.post("/addHPLC", HPLCController.addHPLC);
Router.put("/updateHPLC/:id", HPLCController.updateHPLC);
Router.delete("/deleteHPLC/:id", HPLCController.deleteHPLC);



// //--------------Main Lab-------------------------//
Router.get("/itemsMain", MainController.itemsMain);
Router.post("/addMain", MainController.addMain);
Router.put("/updateMain/:id", MainController.updateMain);
Router.delete("/deleteMain/:id", MainController.deleteMain);

//==============previus Report-----------------
Router.post("/getPrevStockInInfo",itemController.getPrevStockInInfo)
Router.post("/getPrevProjectbrucella",ProjectbrucellaController.getPrevProjectbrucella)
Router.post("/getPrevProjectPcr",PrcController.getPrevProjectPcr)
Router.post("/getPrevStockDna",DnaController.getPrevStockDna)
Router.post("/getPrevStockCulture",CultureController.getPrevStockCulture)
Router.post("/getPrevStockParasites",ParasitesController.getPrevStockParasites)
Router.post("/getPrevStockHPLC",HPLCController.getPrevStockHPLC)
Router.post("/getPrevStockMain",MainController.getPrevStockMain)









export default Router;