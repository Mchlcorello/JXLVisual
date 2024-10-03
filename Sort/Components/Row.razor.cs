using Microsoft.AspNetCore.Components;

namespace Sort.Components
{
    public partial class Row
    {
        [Parameter]
        public string Margin { get; set; }

        [Parameter]
        public EventCallback<string> MarginChanged { get; set; }

        void OnMarginChanged(string newValue)
        {
            Margin = newValue;

            MarginChanged.InvokeAsync(newValue);
        }
    }
}
