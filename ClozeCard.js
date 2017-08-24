var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "______");
	if (this.partial === text) {
		console.log("Error");
	} else {
		return new ClozeCard(text, cloze);
	}
};


module.exports = ClozeCard;