var Fighter;
(function (Fighter) {
    var FighterViewModel = (function () {
        function FighterViewModel() {
            this.Icons = ko.observableArray([]);
            this.DisplayErrorMessage = ko.observable(false);
            this.LoadInProgress = ko.observable(true);
            this.ErrorMessage = ko.observable("");
            this.GetIcons();
        }
        FighterViewModel.prototype.GetIcons = function () {
            var _this = this;
            this.LoadInProgress(true);
            $.ajax({
                method: 'GET',
                url: MatthewGollaherService + "wiiusmash4/icon",
                contentType: "application/json; charset=utf-8",
                success: function (data) { _this.GetIconsSuccess(data); },
                error: function () { _this.GetIconsFailure(); }
            });
        };
        FighterViewModel.prototype.GetIconsSuccess = function (data) {
            for (var i = 0; i < data.length; i++) {
                this.Icons.push(new Fighter.IconModel(data[i]));
            }
            this.LoadInProgress(false);
        };
        FighterViewModel.prototype.GetIconsFailure = function () {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        };
        return FighterViewModel;
    }());
    Fighter.FighterViewModel = FighterViewModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=FighterViewModel.js.map