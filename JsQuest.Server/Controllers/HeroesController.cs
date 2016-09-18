using System;
using System.Collections.Generic;  
using System.Linq;  
using JsQuest.Models;  
using Microsoft.AspNetCore.Mvc;

namespace JsQuest.Controllers {

  [Route("api/[controller]")]
  public class HeroesController : Controller {
      private readonly QuestingContext _context;

      public HeroesController(QuestingContext context) {
          _context = context;
      }
  }

}