var Fighter;
(function (Fighter) {
    var IconModel = (function () {
        function IconModel(data) {
            this.FighterId = ko.observable(0);
            this.Name = ko.observable("");
            this.IconUrl = ko.observable("");
            if (data) {
                this.FighterId(data.FighterId);
                this.Name(data.Name);
                this.IconUrl(data.IconUrl);
            }
        }
        return IconModel;
    }());
    Fighter.IconModel = IconModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=Icon.js.map