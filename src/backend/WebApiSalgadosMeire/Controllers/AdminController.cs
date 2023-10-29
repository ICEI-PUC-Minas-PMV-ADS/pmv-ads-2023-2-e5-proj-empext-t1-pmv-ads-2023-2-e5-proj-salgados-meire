using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiSalgadosMeire.Moldels;
using WebApiSalgadosMeire.Services;
using WebApiSalgadosMeire.ViewModels;

namespace WebApiSalgadosMeire.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly SalgadosServices _salgadosServices;
        private readonly PedidoService _pedidoService;

        public AdminController(SalgadosServices salgadosServices, PedidoService pedidoService)
        {
            _salgadosServices = salgadosServices;
            _pedidoService = pedidoService;
        }

        [HttpGet]
        [Route("obter-salgados-ativos")]
        public async Task<List<Salgado>> ObterSalgadosAtivos()
        {
            return await _salgadosServices.ObterTodosSalgados();
        }

        [HttpPost]
        [Route("adicionar-salgado")]
        public async Task<IActionResult> AdicionarSalgado(SalgadoViewModel model)
        {
            var novoSalgado = new Salgado(model.Nome, model.Descricao, model.ValorUnitário, model.ImageUrl);

            await _salgadosServices.AdicionarSalgado(novoSalgado);

            return Ok();
        }

        [HttpPut]
        [Route("atualizar-salgado/{id}")]
        public async Task<IActionResult> AtualizarSalgado(Guid id, SalgadoViewModel model)
        {
            var salgado = await _salgadosServices.ObterSalgadoPorId(id);

            if (salgado == null) return NotFound("Salgado não encontrado");

            salgado.AtualizarSalgado(model.Nome, model.Descricao, model.ValorUnitário, model.ImageUrl);

            await _salgadosServices.AtualizarSalgado(salgado);

            return Ok();
        }

        [HttpPost]
        [Route("excluir-salgado/{id}")]
        public async Task<IActionResult> MudarStatusSalgado(Guid id)
        {
            var salgado = await _salgadosServices.ObterSalgadoPorId(id);

            if (salgado == null) return NotFound("Salgado não encontrado");

            salgado.DeletarSalgado();

            await _salgadosServices.AtualizarSalgado(salgado);

            return Ok();
        }

        [HttpGet]
        [Route("atualizar-status-pedido/{idPedido}/{status}")]
        public async Task<IActionResult> AtualizarStatusPedido(Guid idPedido, string status)
        {
            var pedido = await _pedidoService.ObterPedidoPorId(idPedido);

            if (pedido is null) return NotFound("Pedido não encontrado");

            pedido.AlterarStatusPedido(status);

            await _pedidoService.AtualizarPedido(pedido);

            return Ok();
        }
    }
}
