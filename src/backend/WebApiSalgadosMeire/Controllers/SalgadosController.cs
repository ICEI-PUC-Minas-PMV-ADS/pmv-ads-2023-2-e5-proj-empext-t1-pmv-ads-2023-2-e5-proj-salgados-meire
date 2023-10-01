using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiSalgadosMeire.Moldels;
using WebApiSalgadosMeire.Services;

namespace WebApiSalgadosMeire.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalgadosController : ControllerBase
    {
        private readonly SalgadosServices _salgadosServices;

        public SalgadosController(SalgadosServices salgadosServices)
        {
            _salgadosServices = salgadosServices;
        }

        [HttpGet]
        public async Task<List<Salgado>> GetSalgados() =>
            await _salgadosServices.GetAsync();

        [HttpPost]
        public async Task<Salgado> PostSalgados(Salgado salgados)
        {
            await _salgadosServices.CreateAsync(salgados);
            return salgados;
        }
    }
}
