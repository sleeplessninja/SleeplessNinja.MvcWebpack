using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using SleeplessNinja.Bootstrap.Components.Components;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.RegisterCustomElement<AlertBox>("alert-box");

await builder.Build().RunAsync();

