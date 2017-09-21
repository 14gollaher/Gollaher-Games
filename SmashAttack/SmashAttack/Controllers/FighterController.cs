using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WiiUSmash4
{
    public class FighterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public Fighter GetFighter(int id)
        {
            try
            {
                string ApiBaseUrl = Configuration["Acm:AcmDbConnectionString"];

                string url = employeeMicroservice + "Employee/GetEmployeeUserName?employeeNumber=" + employeeNumber;
                HttpWebRequest request = MicroserviceRequestHelper.CreateGetRequest(url);
                string response = MicroserviceRequestHelper.MicroserviceCall(request);

                return JsonConvert.DeserializeObject<string>(response);
            }
            catch (Exception ex)
            {
                string timestamp;
                ExceptionHelper.HandleExceptionWrapper(ex, "Log Only", out timestamp);
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

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
