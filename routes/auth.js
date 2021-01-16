 const {Router} = require('express');
 const router = Router();
 
 
 router.get('/', (req, res) => {
     console.log("Se recibió una petición en /");
     res.json({
         ok: true,
         msg: "Recibidó",
     });
 }
 );

 module.exports = router;