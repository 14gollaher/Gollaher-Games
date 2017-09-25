using Microsoft.AspNetCore.Mvc;

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
