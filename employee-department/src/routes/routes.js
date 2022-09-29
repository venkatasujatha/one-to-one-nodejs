const emp = require("../controller/employeecontroller");
const professional_info = require("../controller/professional_info");
const router = require("express").Router();

router.post("/addinfo", professional_info.add);
router.post("/addemployee", emp.add);
//getall T1
router.get("/getemployees", emp.findall);
//getall T2
router.get("/getinfo", professional_info.findall);

//getone T1
router.get("/getemp/:id", emp.findemp);
//getone T2
router.get("/getoneinfo/:pid", professional_info.findinfo);
//delete T1
router.delete("/deleteemp/:id", emp.deleteemp);
//delete T2
router.delete("/deleteinfo/:pid", professional_info.deleteinfo);
//update employee
router.put("/updateemployee/:id", emp.updateemp);
router.put("/updateProfession/:pid", professional_info.updateProfessional);

module.exports = router;
