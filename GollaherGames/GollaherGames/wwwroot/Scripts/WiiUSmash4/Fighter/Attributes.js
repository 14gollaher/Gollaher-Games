var Fighter;
(function (Fighter) {
    var AttributesModel = (function () {
        function AttributesModel() {
            this.Weight = ko.observable("");
            this.WeightRank = ko.observable(0);
            this.RunSpeed = ko.observable("");
            this.RunSpeedRank = ko.observable(0);
            this.WalkSpeed = ko.observable("");
            this.WalkSpeedRank = ko.observable(0);
            this.AirSpeed = ko.observable("");
            this.AirSpeedRank = ko.observable(0);
            this.FallSpeed = ko.observable("");
            this.FallSpeedRank = ko.observable(0);
            this.FastFallSpeed = ko.observable("");
            this.FastFallSpeedRank = ko.observable(0);
            this.AirAcceleration = ko.observable("");
            this.Gravity = ko.observable("");
            this.ShortHopAirTimeFrames = ko.observable("");
            this.FullHopAirTimeFrames = ko.observable("");
            this.MaximumJumps = ko.observable("");
            this.WallJump = ko.observable(false);
            this.WallCling = ko.observable(false);
            this.Crawl = ko.observable(false);
            this.Tether = ko.observable(false);
            this.JumpSquatFrames = ko.observable("");
            this.SoftLandingLagFrames = ko.observable("");
            this.HardLandingLagFrames = ko.observable("");
        }
        return AttributesModel;
    }());
    Fighter.AttributesModel = AttributesModel;
})(Fighter || (Fighter = {}));
//# sourceMappingURL=Attributes.js.map