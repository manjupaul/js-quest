using System;
using Microsoft.EntityFrameworkCore;

namespace JsQuest.Models {

    public class QuestingContext : DbContext 
    {
        public QuestingContext(DbContextOptions<QuestingContext> options) 
            : base(options)
        {

        }

        public DbSet<Player> Players {get; set; }
        public DbSet<Hero> Heroes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>()
            .HasIndex(b => b.Email)
            .IsUnique();

            modelBuilder.Entity<Player>()
            .HasIndex(b => b.UserName)
            .IsUnique();
        }

    }
}