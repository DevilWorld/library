using System.Data.Entity.ModelConfiguration;
using LMS.Domain.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace LMS.Infrastructure.Data.Mapping
{
    public class GenderMap : EntityTypeConfiguration<Gender>
    {
        public GenderMap()
        {
            HasKey(x => x.GenderId);

            ToTable("dbo.Gender");

            Property(x => x.GenderId).HasColumnName("GenderId").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            Property(x => x.GenderType).HasColumnName("GenderType").IsRequired();
            Property(x => x.Description).HasColumnName("Description").IsOptional();
            Property(x => x.CreatedBy).HasColumnName("CreatedBy").IsRequired();
            Property(x => x.CreatedDate).HasColumnName("CreatedDate").IsRequired();
            Property(x => x.ModifiedBy).HasColumnName("ModifiedBy").IsOptional();
            Property(x => x.ModifiedDate).HasColumnName("ModifiedDate").IsOptional();
            Property(x => x.Active).HasColumnName("Active").IsRequired();
        }        
    }
}
