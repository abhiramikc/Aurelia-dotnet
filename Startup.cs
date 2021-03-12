using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using project.src.Interface;
using project.src.Repository;

namespace WebApplicationBasic
{
  public class Startup
  {

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add framework services.
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);

      // services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
      services.AddSingleton<IConfiguration>(Configuration);
      services.AddSingleton<IStudent, StudentRepository>();

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        //app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        //{
        //  HotModuleReplacement = true,
        //  ConfigFile = "webpack.netcore.config.js",
        //  HotModuleReplacementClientOptions = new Dictionary<string, string>{
        //            {"reload", "true"}
        //          }
        //});
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();

      //app.UseMvc(routes =>
      //{
      //    routes.MapRoute(
      //        name: "default",
      //        template: "{controller=Home}/{action=Index}/{id?}");

      //      routes.MapSpaFallbackRoute(
      //        name: "spa-fallback",
      //        defaults: new { controller = "Home", action = "Index" });
      //});
      app.UseRouting();

      app.UseAuthentication();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
      name: "default",
      pattern: "{controller=Home}/{action=Index}/{id?}");
        endpoints.MapRazorPages();
      });
    }
  }
}
