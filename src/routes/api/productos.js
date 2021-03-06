const express = require('express');
const router = express.Router();
const productosAPIController = require('../../controllers/api/productosAPIController');

//Rutas

router.get('/menu', productosAPIController.menu);

router.get('/', productosAPIController.list);

router.get('/detail/:id', productosAPIController.productDetail);

router.get('/totalProducts', productosAPIController.totalProducts);

router.get('/totalCategories', productosAPIController.totalCategories);
router.get('/totalSubcategories', productosAPIController.totalSubcategories);
router.get('/totalBrands', productosAPIController.totalBrands);

router.get('/totalLengths', productosAPIController.totalLengths);

router.get('/totalByCategory', productosAPIController.totalByCategory);

router.get('/list', productosAPIController.productList);

router.get('/lastProduct', productosAPIController.lastProduct);

router.post('/create', productosAPIController.create);

router.put('/update/:id', productosAPIController.update);

router.delete('/delete/:id', productosAPIController.destroy);

/* router.get('/page', productosAPIController.listByPage); */

router.get('/search', productosAPIController.search);







module.exports = router;