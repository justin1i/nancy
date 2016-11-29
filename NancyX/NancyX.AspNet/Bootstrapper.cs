using Nancy;
using Nancy.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NancyX.Application
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ConfigureConventions(NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            // views
            nancyConventions.ViewLocationConventions.Add(
            (viewName, model, context) => string.Concat("bin/views/", viewName));

            // assets
            nancyConventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("assets", "bin/assets"));
        }
    }
}
