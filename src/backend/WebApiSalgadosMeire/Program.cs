using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebApiSalgadosMeire.DataBase;
using WebApiSalgadosMeire.Moldels;
using WebApiSalgadosMeire.Services;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("SalgadosMeireConnection");

builder.Services.AddDbContext<SalgadosMeireContext>(opts => opts.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Add services to the container.
builder.Services.AddScoped<SalgadosServices>();
builder.Services.AddScoped<ClientesService>();
builder.Services.AddScoped<ItensPedidoService>();
builder.Services.AddScoped<PedidoService>();

//builder.Services.Configure<SalgadosDatabaseSettings>
//    (builder.Configuration.GetSection("SalgadosMeireDatabase"));

//builder.Services.AddSingleton<SalgadosServices>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

builder.Services.AddCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(c =>
{
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();
});

app.UseAuthorization();

app.MapControllers();

app.Run();
