using Microsoft.AspNetCore.Components;

namespace Sort.Components
{
    public partial class Run
    {

        [Parameter]
        public string? Content { get; set; }

        [Parameter]
        public EventCallback<string?> ContentChanged { get; set; }

        [Parameter]
        public string? FontSize { get; set; }

        [Parameter]
        public EventCallback<string?> FontSizeChanged { get; set; }

        [Parameter]
        public string? FontWeight { get; set; }

        [Parameter]
        public EventCallback<string?> FontWeightChanged { get; set; }

        void OnFontSizeChanged(string newValue)
        {
            FontSize = newValue;

            FontSizeChanged.InvokeAsync(newValue);
        }

        void OnContentChanged(string newValue)
        {
            Content = newValue;

            ContentChanged.InvokeAsync(newValue);
        }

        void OnFontWeightChanged(string newValue)
        {
            FontWeight = newValue;

            FontWeightChanged.InvokeAsync(newValue);
        }
    }
}
