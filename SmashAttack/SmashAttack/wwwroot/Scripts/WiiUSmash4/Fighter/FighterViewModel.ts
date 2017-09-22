module Fighter {
    
    declare var MatthewGollaherService: any;

    export class FighterViewModel {

        public Icons: KnockoutObservableArray<IconModel> = ko.observableArray([]);
        public DisplayErrorMessage: KnockoutObservable<boolean> = ko.observable(false);
        public LoadInProgress: KnockoutObservable<boolean> = ko.observable(true);
        public ErrorMessage: KnockoutObservable<string> = ko.observable("");

        public constructor() {
            this.GetIcons();
        }

        private GetIcons() {
            this.LoadInProgress(true);
            $.ajax({
                method: 'GET',
                url: MatthewGollaherService + "wiiusmash4/icon",
                contentType: "application/json; charset=utf-8",
                success: (data) => { this.GetIconsSuccess(data); },
                error: () => { this.GetIconsFailure() }
            });
        }

        private GetIconsSuccess(data: any) {
            for (let i = 0; i < data.length; i++) {
                this.Icons.push(new Fighter.IconModel(data[i]));
            }
            this.LoadInProgress(false);
        }

        private GetIconsFailure()
        {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        }
    }
}