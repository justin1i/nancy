using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NancyX.Application
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = args =>
            {
                return View["index"];
            };
        }
    }
}
