using VueJS2InNet7.Infrastructures.StartupRegisters;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager configuration = builder.Configuration;

builder.Services.RegisterGeneralServices(configuration);

var app = builder.Build();
IWebHostEnvironment webHostEnvironment = app.Environment;
app.RegisterGeneral(webHostEnvironment);
app.Run();