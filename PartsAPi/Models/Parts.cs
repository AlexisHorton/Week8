using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PartsAPi
{
    public class Parts
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int price { get; set; }
        public int quantity { get; set; }

        public static List<Parts> ListParts()
        {
            using (PartsContext ctx = new PartsContext())
            {
                var parts = ctx.Parts.ToList();
                return parts;
            }
        }

        public static Parts AddPart(Parts newpart)
        {
            using (PartsContext ctx = new PartsContext())
            {
                ctx.Add(newpart);
                ctx.SaveChanges();
                return newpart;
            }
        }

        public static bool DeletePart(int id)
        {
            using (PartsContext ctx = new PartsContext())
            {
                Parts thepart = new Parts();
                thepart.id = id;
                ctx.Remove(thepart);
                ctx.SaveChanges();
                return true;

            }
        }
    }

    public class PartsContext : DbContext
    {
        public DbSet<Parts> Parts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {                                                       // *DON'T FORGET CHANGE DATABASE NAME* //
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=partsinfo;Integrated Security=SSPI;");
        }
    }
}
