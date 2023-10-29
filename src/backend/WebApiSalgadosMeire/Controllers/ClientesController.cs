using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiSalgadosMeire.Moldels;
using WebApiSalgadosMeire.Services;
using WebApiSalgadosMeire.ViewModels;

namespace WebApiSalgadosMeire.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly ClientesService _clienteServices;
        private readonly PedidoService _pedidoService;
        private readonly ItensPedidoService _itensPedidoService;

        public ClientesController(ClientesService clienteService, PedidoService pedidoService, ItensPedidoService itensPedidoService)
        {
            _clienteServices = clienteService;
            _pedidoService = pedidoService;
            _itensPedidoService = itensPedidoService;
        }

        [HttpPost]
        [Route("confirmar-dados-cliente")]
        public async Task<IActionResult> ConfirmarDadosCliente(ClienteViewModel cliente)
        {
            var clienteExistente = await _clienteServices.ObterClientePorTelefone(cliente.Telefone);

            if (clienteExistente is not null)
            {
                clienteExistente.AtualizarCliente(cliente.Nome, cliente.Endereco, cliente.Telefone);

                await _clienteServices.AtualizarCliente(clienteExistente);

                return Ok(new { clienteId = clienteExistente.Id });
            }

            var newCliente = new Cliente(cliente.Nome, cliente.Endereco, cliente.Telefone);

            await _clienteServices.AdicionarCliente(newCliente);

            var clienteCriado = await _clienteServices.ObterClientePorTelefone(cliente.Telefone);

            return Ok(new { clienteId = clienteCriado?.Id });
        }

        [HttpPost]
        [Route("criar-pedido")]
        public async Task<IActionResult> FazerPedido(PedidoViewModel model)
        {
            var novoPedido = new Pedido(model.ClienteId, model.DataPedido, model.FormaPagamento, model.TrocoPara);

            var listaItensPedido = new List<ItensPedido>();

            foreach (var item in model.ItensPedidos)
            {
                var novoItem = new ItensPedido(novoPedido.Id, item.SalgadoId, item.Quantidade, item.ValorUnitarioNaCompra, item.Observacoes);
                listaItensPedido.Add(novoItem);
            }

            await _pedidoService.AdicionarPedido(novoPedido, listaItensPedido);

            return Ok();

        }

        [HttpGet]
        [Route("meus-pedidos/{id:Guid}")]
        public async Task<IActionResult> ObterMeusPedidos(Guid id)
        {
            var pedidos = await _pedidoService.ObterPedidosPorClienteId(id);

            return Ok(pedidos);

        }

        [HttpGet]
        [Route("meu-login/{telefone}")]
        public async Task<IActionResult> ObterMeusDados(string telefone)
        {
            var clienteExistente = await _clienteServices.ObterClientePorTelefone(telefone);

            if (clienteExistente is not null)
            {
                return Ok(new { cadastrado = true, dados = clienteExistente });
            }

            return Ok(new { cadastrado = false, dados = clienteExistente });

        }
    }
}
