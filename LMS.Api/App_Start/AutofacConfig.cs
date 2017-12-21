using Autofac;
using Autofac.Integration.WebApi;
using LMS.Infrastructure.Repository;
using LMS.Domain.Interfaces.Repository;
using System.Reflection;
using System.Web.Http;
using System.Linq;


namespace LMS.Api.App_Start
{
    public class AutofacConfig
    {
        public static void Register()
        {
            var builder = new ContainerBuilder();

            builder.RegisterAssemblyTypes(typeof(IAuthorRepository).Assembly)
                    .AsImplementedInterfaces().InstancePerLifetimeScope();            
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            var container = builder.Build();
            
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            var s = container.ComponentRegistry.Registrations
                .SelectMany(x => x.Services).ToList();

        }
    }
}