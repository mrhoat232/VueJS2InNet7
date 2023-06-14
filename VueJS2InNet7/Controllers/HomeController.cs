using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using VueJS2InNet7.Models;

namespace VueJS2InNet7.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        public HomeController()
        {
        }

        public IActionResult Index()
        {
            string accessToken = "accessTokenSample";
            var logged = new LoggedUserInfo
            {
                AccessToken = accessToken,
                UserId = 1,
                UserName = "Demo Username"
            };
            return View(logged);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}