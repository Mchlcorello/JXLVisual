using Microsoft.AspNetCore.Components;

namespace Sort.Components
{
    public partial class Body
    {
        [Parameter]
        public string? Width { get; set; }

        [Parameter]
        public string? Background { get; set; }

        [Parameter]
        public EventCallback<string?> WidthChanged { get; set; }

        [Parameter]
        public EventCallback<string?> BackgroundChanged { get; set; }

        void OnBackGroundChanged(string newValue)
        {
            Background = newValue;

            BackgroundChanged.InvokeAsync(newValue);
        }

        void OnWidthChanged(string newValue)
        {
            Width = newValue;

            WidthChanged.InvokeAsync(newValue);
        }


    }
}
