using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace JsQuest.Models {

    public class Player 
    {
        public int Id { get; set;}

        [Required]
        public string Name { get; set;}

        public DateTime LastPlayedOn { get; set; }
        
    }

    public class PlayerContext : DbContext
    {
        public PlayerContext(DbContextOptions<PlayerContext> options) 
            : base(options)
        {

        }

        public DbSet<Player> Players {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>()
            .HasIndex(b => b.Name)
            .IsUnique();
        }


    }
}