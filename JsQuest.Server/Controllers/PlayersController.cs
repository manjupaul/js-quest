using System;
using System.Collections.Generic;  
using System.Linq;  
using JsQuest.Models;  
using Microsoft.AspNetCore.Mvc;

namespace JsQuest.Controllers {

    [Route("api/[controller]")]
    public class PlayersController : Controller
    {
        private readonly QuestingContext _context;

        public PlayersController(QuestingContext context)
        {
            _context = context;
        }

        // GET api/players?[email=Foo]
        public IEnumerable<Player> Get([FromQuery] string email)
        {
            if (!String.IsNullOrEmpty(email)) {
                return _context.Players.Where(x => String.Equals(x.Email, email, StringComparison.OrdinalIgnoreCase));
            } else {
                return _context.Players.ToList();
            }
        }

        // GET api/players/5
        [HttpGet("{id}")]
        public Player GetPlayer(string id)
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