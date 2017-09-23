using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using Newtonsoft.Json;
using GollaherGames.BusinessLogic;

namespace GollaherGames.WiiUSmash4
{
    [Area("WiiUSmash4")]
    public class FighterController : Controller
    {
        private readonly WiiUSmash4Configuration _configuration;

        public FighterController(WiiUSmash4Configuration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult Index( )
        {
            ViewBag.GollaherGamesService = _configuration.GollaherGamesService;
            return View("~/Views/WiiUSmash4/Fighter.cshtml");
        }

        public string GetFighter(int fighterId)
        {
            try
            {
                string url = _configuration.GollaherGamesService + "wiiusmash4/fighter/" + fighterId;
                HttpWebRequest request = RequestHelper.CreateGetRequest(url);
                string response = RequestHelper.ServiceCall(request);

                return JsonConvert.DeserializeObject<string>(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw ex;
            }
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }
    }
}
