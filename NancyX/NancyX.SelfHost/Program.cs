using Nancy.Hosting.Self;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NancyX.SelfHost
{
    class Program
    {
        static void Main(string[] args)
        {
            var nancyHost = new NancyHost(new Uri("http://localhost:3000/"));
            nancyHost.Start();
            Console.ReadKey();
            nancyHost.Stop();
        }
    }
}
