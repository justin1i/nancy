using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactTutorial.Modules
{
    public class Main : NancyModule
    {
        public Main()
        {
            Get["/"] = args => View["home"];
        }
    }
}