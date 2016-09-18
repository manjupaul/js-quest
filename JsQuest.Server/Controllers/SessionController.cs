using System.Linq;
using JsQuest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace JsQuest.Controllers 
{
    [Route("/api/[controller]")]
    public class SessionsController : Controller 
    {
        private QuestingContext context; 
        public SessionsController(QuestingContext context) 
        {
            this.context = context;
        }

       [HttpPost]
       public string Create([FromBody] string email)
       {
           Player player = this.context.Players.Single(p => p.Email == email);
           if (player != null)   
           {
               HttpContext.Session.SetString("CurrentPlayer", player.Id);
               return HttpContext.Session.GetString("CurrentPlayer");
           } else {
               return null;
           }
       } 
    }
}