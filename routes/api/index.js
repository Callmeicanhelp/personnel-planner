const express = require('express');
const router = express.Router();

router.use(require('./departmentRoute'));
router.use(require('./positionRoute'));
router.use(require('./employeeRoute'));

module.exports = router;
