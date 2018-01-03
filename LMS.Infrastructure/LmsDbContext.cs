using System.Data.Entity;
using LMS.Domain.Models;
using LMS.Infrastructure.Data.Mapping;

namespace LMS.Infrastructure
{
    internal class LmsDbContext: DbContext
    {
        public LmsDbContext():base("name=LMSConnectionString")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Gender> Genders { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new AuthorMap());
            modelBuilder.Configurations.Add(new GenderMap());
        }
    }
}
