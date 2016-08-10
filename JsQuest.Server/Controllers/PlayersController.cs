using System.Collections.Generic;  
using System.Linq;  
using JsQuest.Models;  
using Microsoft.AspNetCore.Mvc;

namespace JsQuest.Controllers {

    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly PlayerContext _context;

        public PlayersController(PlayerContext context)
        {
            _context = context;
        }

        // GET api/players
        public IEnumerable<Player> Get()
        {
            return _context.Players.ToList();
        }

        // GET api/players/5
        [HttpGet("{id}")]
        public Player Get(int id)
        {
            return _context.Players.FirstOrDefault(x => x.Id == id);
        }

        // POST api/players
        [HttpPost]
        public IActionResult Post([FromBody]Player value)
        {
            _context.Players.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }
    }
}