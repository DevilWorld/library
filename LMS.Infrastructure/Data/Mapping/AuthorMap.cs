using LMS.Domain.Models;
using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations.Schema;

namespace LMS.Infrastructure.Data.Mapping
{
    internal class AuthorMap : EntityTypeConfiguration<Author>
    {
        internal AuthorMap()
        {
            ToTable("Author");

            Property(x => x.AuthorId).HasColumnName("AuthorId").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.FirstName).HasColumnName("FirstName").IsRequired();
            Property(x => x.MiddleName).HasColumnName("MiddleName").IsOptional();
            Property(x => x.LastName).HasColumnName("LastName").IsRequired();
            Property(x => x.CreatedBy).HasColumnName("CreatedBy").IsRequired();
            Property(x => x.CreatedDate).HasColumnName("CreatedDate").IsRequired();
            Property(x => x.ModifiedBy).HasColumnName("ModifiedBy").IsOptional();
            Property(x => x.ModifiedDate).HasColumnName("ModifiedDate").IsOptional();
            Property(x => x.Active).HasColumnName("Active").IsOptional();

        }
    }
}
