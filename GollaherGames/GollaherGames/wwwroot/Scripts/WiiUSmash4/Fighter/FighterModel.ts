module Fighter {
    export class FighterModel {
        public Id: KnockoutObservable<number> = ko.observable(0);
        public Name: KnockoutObservable<string> = ko.observable("");
        public Title: KnockoutObservable<string> = ko.observable("");
        public PortraitUrl: KnockoutObservable<string> = ko.observable("");
        public IconUrl: KnockoutObservable<string> = ko.observable("");
        public Attributes: KnockoutObservable<AttributesModel> = ko.observable(new AttributesModel());
        public Attacks: KnockoutObservableArray<AttackModel> = ko.observableArray([]);
        public Grabs: KnockoutObservableArray<GrabModel> = ko.observableArray([]);
        public Throws: KnockoutObservableArray<ThrowModel> = ko.observableArray([]);
        public Rolls: KnockoutObservableArray<RollModel> = ko.observableArray([]);
        public Aerials: KnockoutObservableArray<AerialModel> = ko.observableArray([]);
        public Specials: KnockoutObservableArray<SpecialModel> = ko.observableArray([]);

        public constructor(data?: any) {
            if (data) {
                this.Id(data.Id);
                this.Name(data.Name);
                this.Title(data.Title);
                this.PortraitUrl(data.PortraitPictureUrl);
                this.IconUrl(data.IconUrl);
                this.Attributes(data.Attributes);

                this.Attacks.removeAll();
                for (let i = 0; i < data.Attacks.length; i++) {
                    this.Attacks.push(new Fighter.AttackModel(data.Attacks[i]));
                }

                this.Aerials.removeAll();
                for (let i = 0; i < data.Aerials.length; i++) {
                    this.Aerials.push(new Fighter.AerialModel(data.Aerials[i]));
                }

                this.Specials.removeAll();
                for (let i = 0; i < data.Specials.length; i++) {
                    this.Specials.push(new Fighter.SpecialModel(data.Specials[i]));
                }

                this.Grabs.removeAll();
                for (let i = 0; i < data.Grabs.length; i++) {
                    this.Grabs.push(new Fighter.GrabModel(data.Grabs[i]));
                }

                this.Throws.removeAll();
                for (let i = 0; i < data.Throws.length; i++) {
                    this.Throws.push(new Fighter.ThrowModel(data.Throws[i]));
                }
            }
        }
    }
}