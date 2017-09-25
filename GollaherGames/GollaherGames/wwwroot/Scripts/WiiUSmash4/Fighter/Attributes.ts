module Fighter {
    export class AttributesModel {
        public Weight: KnockoutObservable<string> = ko.observable("");
        public WeightRank: KnockoutObservable<number> = ko.observable(0);
        public RunSpeed: KnockoutObservable<string> = ko.observable("");
        public RunSpeedRank: KnockoutObservable<number> = ko.observable(0);   
        public WalkSpeed: KnockoutObservable<string> = ko.observable("");
        public WalkSpeedRank: KnockoutObservable<number> = ko.observable(0);
        public AirSpeed: KnockoutObservable<string> = ko.observable("");
        public AirSpeedRank: KnockoutObservable<number> = ko.observable(0);   
        public FallSpeed: KnockoutObservable<string> = ko.observable("");
        public FallSpeedRank: KnockoutObservable<number> = ko.observable(0);
        public FastFallSpeed: KnockoutObservable<string> = ko.observable("");
        public FastFallSpeedRank: KnockoutObservable<number> = ko.observable(0);
        public AirAcceleration: KnockoutObservable<string> = ko.observable("");
        public Gravity: KnockoutObservable<string> = ko.observable("");
        public ShortHopAirTimeFrames: KnockoutObservable<string> = ko.observable("");
        public FullHopAirTimeFrames: KnockoutObservable<string> = ko.observable("");
        public MaximumJumps: KnockoutObservable<string> = ko.observable("");
        public WallJump: KnockoutObservable<boolean> = ko.observable(false);
        public WallCling: KnockoutObservable<boolean> = ko.observable(false);
        public Crawl: KnockoutObservable<boolean> = ko.observable(false);
        public Tether: KnockoutObservable<boolean> = ko.observable(false);
        public JumpSquatFrames: KnockoutObservable<string> = ko.observable("");
        public SoftLandingLagFrames: KnockoutObservable<string> = ko.observable("");
        public HardLandingLagFrames: KnockoutObservable<string> = ko.observable("");
    }
}