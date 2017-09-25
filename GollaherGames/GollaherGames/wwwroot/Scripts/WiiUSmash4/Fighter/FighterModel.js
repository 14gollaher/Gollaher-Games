var Fighter;
(function (Fighter) {
    var FighterModel = (function () {
        function FighterModel(data) {
            this.Id = ko.observable(0);
            this.Name = ko.observable("");
            this.Title = ko.observable("");
            this.PortraitUrl = ko.observable("");
            this.IconUrl = ko.observable("");
            this.Attributes = ko.observable(new Fighter.AttributesModel());
            this.Attacks = ko.observableArray([]);
            this.Grabs = ko.observableArray([]);
            this.Throws = ko.observableArray([]);
            this.Rolls = ko.observableArray([]);
            this.Aerials = ko.observableArray([]);
            this.Specials = ko.observableArray([]);
            if (data) {
                this.Id(data.Id);
                this.Name(data.Name);
                this.Title(data.Title);
                this.PortraitUrl(data.PortraitPictureUrl);
                this.IconUrl(data.IconUrl);
                this.Attributes(data.Attributes);
                this.Attacks.removeAll();
                for (var i = 0; i < data.Attacks.length; i++) {
                    this.Attacks.push(new Fighter.AttackModel(data.Attacks[i]));
                }
                this.Aerials.removeAll();
                for (var i = 0; i < data.Aerials.length; i++) {
                    this.Aerials.push(new Fighter.AerialModel(data.Aerials[i]));
                }
                this.Specials.removeAll();
                for (var i = 0; i < data.Specials.length; i++) {
                    this.Specials.push(new Fighter.SpecialModel(data.Specials[i]));
                }
                this.Grabs.removeAll();
                for (var i = 0; i < data.Grabs.length; i++) {
                    this.Grabs.push(new Fighter.GrabModel(data.Grabs[i]));
                }
                this.Throws.removeAll();
                for (var i = 0; i < data.Throws.length; i++) {
                    this.Throws.push(new Fighter.ThrowModel(data.Throws[i]));
                }
            }
        }
        return FighterModel;
    }());
    Fighter.FighterModel = FighterModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=FighterModel.js.map