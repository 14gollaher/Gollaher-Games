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
    [Area("Home")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Home/Index.cshtml");
        }
    }
}
