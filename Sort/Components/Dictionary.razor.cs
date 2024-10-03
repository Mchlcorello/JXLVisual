using Microsoft.AspNetCore.Components;
using MudBlazor;

namespace Sort.Components
{
    public partial class Dictionary
    {
        [Parameter]
        public List<Pair> Pairs { get; set; } = new List<Pair>();
        private void AddItem()
        {
            Pairs.Add(new Pair());
        }

        private void HandleRemoveItem(Pair item)
        {
            Pairs.Remove(item);
        }
    }
}
