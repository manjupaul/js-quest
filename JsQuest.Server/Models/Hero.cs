using System;
using System.ComponentModel.DataAnnotations;

namespace JsQuest.Models {
    
    public class Hero {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PlayerId { get; set; }
        public Player player { get; set; }
    }
}
