const express = require("express")
const router = express.Router()

const message = require("../controllers/messageController")

router.route("/").get(message.list).post(message.create_post)
router.route("/:id").get(message.item)
router.route("/edit/:id").post(message.edit_post)
router.route('/delete/:id').post(message.delete_post)
router.route('/like/:id').post(message.like_post)
router.route('/unlike/:id').post(message.unlike_post)

module.exports = router