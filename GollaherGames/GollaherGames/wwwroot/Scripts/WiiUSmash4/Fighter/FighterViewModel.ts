module Fighter {
    declare var GollaherGamesService: any;

    export class FighterViewModel extends PageTools {
        public Cards: KnockoutObservableArray<CardModel> = ko.observableArray([]);
        public SelectedFighter: KnockoutObservable<FighterModel> = ko.observable(new FighterModel());
        public DisplayFighterDetails: KnockoutObservable<boolean> = ko.observable(false);
        public SearchQuery: KnockoutObservable<string> = ko.observable("");
        public AbilityTypes: KnockoutObservable<string> = ko.observable("");
        public FilteredCards = ko.computed(function () {
            var filter = this.SearchQuery().replace(/[.,\/#!$%\@^&\*;:{}=\-_`~()]/g, "").toLowerCase();
            if (!filter) {
                return this.Cards();
            }
            else {
                return ko.utils.arrayFilter(this.Cards(), function (item: FighterModel) {
                    return item.Name().replace(/[.,\/#!$%\^&@\*;:{}=\-_`~()]/g, "").toLowerCase().indexOf(filter) !== -1
                });
            }
        }, this);

        public constructor() {
            super();
            this.GetAbilityTypes();
            this.GetIcons();
        }

        public IncrementCurrentSelectedAbilityFrame(data: AttackModel) {
            var currentFrame = data.SelectedAbilityFramePictureIndex()
            var totalFrames = data.AbilityFramePictureUrls().length;

            if (currentFrame < totalFrames - 1) {
                data.SelectedAbilityFramePictureIndex(data.SelectedAbilityFramePictureIndex() + 1);
            }

            //$('.tree').treegrid({
            //    'saveState': true,
            //});
        }

        public DecrementCurrentSelectedAbilityFrame(data: AttackModel) {
            var currentFrame = data.SelectedAbilityFramePictureIndex()

            if (currentFrame > 0)
            {
                data.SelectedAbilityFramePictureIndex(data.SelectedAbilityFramePictureIndex() - 1);
            }

            //$('.tree').treegrid({
            //    'saveState': true,
            //});
        }

        public SetSelectedFighter(data: any) {
            this.LoadInProgress(true);
            this.GetFighter(data);
        }

        private GetFighter(fighterId: number) {
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "WiiUSmash4/Fighter/" + fighterId,
                contentType: "application/json; charset=utf-8",
                success: (data) => { this.GetFighterSuccess(data); },
                error: () => { this.GetFighterFailure() }
            });
        }

        private GetFighterSuccess(data: any) {
            this.SelectedFighter(new FighterModel(data));
            this.LoadInProgress(false);
            this.DisplayFighterDetails(true);
            $('.tree').treegrid({
                'initialState': 'collapsed',
            });
        }

        private GetFighterFailure() {
            this.ErrorMessage("Error loading fighter.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        }

        private GetIcons() {
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "WiiUSmash4/Card",
                contentType: "application/json; charset=utf-8",
                success: (data) => { this.GetIconsSuccess(data); },
                error: () => { this.GetIconsFailure() }
            });
        }
        
        private GetIconsSuccess(data: any) {
            for (let i = 0; i < data.length; i++) {
                this.Cards.push(new CardModel(data[i]));
            }
            this.LoadInProgress(false);
        }

        private GetIconsFailure()
        {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
            this.LoadInProgress(false);
        }

        private GetAbilityTypes() {
            $.ajax({
                method: 'GET',
                url: GollaherGamesService + "WiiUSmash4/AbilityType",
                contentType: "application/json; charset=utf-8",
                success: (data) => { this.GetAbilityTypesSuccess(data); },
                error: () => { this.GetAbilityTypesFailure() }
            });
        }

        private GetAbilityTypesSuccess(data: any) {
            //for (let i = 0; i < data.length; i++) {
            //    this.AbilityTypes.push(data[i]);
            //}
        }

        private GetAbilityTypesFailure() {
            this.ErrorMessage("Error loading icons.");
            this.DisplayErrorMessage(true);
        }
    }
}