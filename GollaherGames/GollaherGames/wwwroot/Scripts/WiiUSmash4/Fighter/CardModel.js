var Fighter;
(function (Fighter) {
    var CardModel = (function () {
        function CardModel(data) {
            this.FighterId = ko.observable(0);
            this.Name = ko.observable("");
            this.Title = ko.observable("");
            this.PortraitUrl = ko.observable("");
            if (data) {
                this.FighterId(data.FighterId);
                this.Name(data.Name);
                this.Title(data.Title);
                this.PortraitUrl(data.PortraitUrl);
            }
        }
        return CardModel;
    }());
    Fighter.CardModel = CardModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=CardModel.js.map