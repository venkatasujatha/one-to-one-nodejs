const { dataSource } = require("../database/database");
const { professional_info } = require("../entity/professional_info");
const proRepo = dataSource.getRepository("T2");
const appConst = require("../constants");
//post
const add = async (req, res) => {
  try {
    const resp = await proRepo.save(req.body);

    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};
//getall
const findall = async (req, res) => {
  try {
    const resp = await proRepo.find();
    res.send(resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};
//getone
const findinfo = async (req, res) => {
  try {
    const resp = await proRepo.findOneBy({ pidconst addmultipleemployees = async(req, res) => {
  try{
    
    await employeeRepo
    .createQueryBuilder()
    .insert()
    .into(emp)
    .values(
     req.body
    )
    .execute();
    
      
      res.status(200).json({ 
        status:appConst.status.success,
        
        message:"inserted",
      })
    }

  catch(error)
  {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message:error.message
    })
  }
 
}

//delete multiple employees 
const deletemultiemp = async(req, res) => {
  try{
  await employeeRepo.delete(req.body);
  res.status(200).json({ 
    status:appConst.status.success,
    
    message:"inserted",
  })
}

catch(error)
{
console.log(error.message);
res.status(400).json({
  status: appConst.status.fail,
  response: null,
  message:error.message
})
}
: req.params.pid });
    res.send(resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};

//delete information

const deleteinfo = async (req, res) => {
  try {
    const resp = await proRepo.delete({ pid: req.params.pid });
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};

const updateProfessional = async (req, res) => {
  try {
    const id = req.params.pid;

    await proRepo.update({ pid: id }, req.body);
    res.send(id + " updated  successfully");
  } catch (error) {
    console.log(err.message);
  }
};
const addmultipleemployees = async(req, res) => {
  try{
    
    await employeeRepo
    .createQueryBuilder()
    .insert()
    .into(emp)
    .values(
     req.body
    )
    .execute();
    
      
      res.status(200).json({ 
        status:appConst.status.success,
        
        message:"inserted",
      })
    }

  catch(error)
  {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message:error.message
    })
  }
 
}

//delete multiple employees 
const deletemultiemp = async(req, res) => {
  try{
  await employeeRepo.delete(req.body);
  res.status(200).json({ 
    status:appConst.status.success,
    
    message:"inserted",
  })
}

catch(error)
{
console.log(error.message);
res.status(400).json({
  status: appConst.status.fail,
  response: null,
  message:error.message
})
}

module.exports = { add, findall, findinfo, deleteinfo, updateProfessional,addmultipleemployees, deletemultiemp};
