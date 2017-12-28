using System.Data.Entity;
using LMS.Domain.Models;
using LMS.Infrastructure.Data.Mapping;

namespace LMS.Infrastructure
{
    internal class LmsDbContext: DbContext
    {
        public LmsDbContext():base("name=LMSConnectionString")
        {

        }

        public virtual DbSet<Author> Authors { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new AuthorMap());
            modelBuilder.Configurations.Add(new GenderMap());
        }
    }
}
