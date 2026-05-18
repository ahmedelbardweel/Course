<script setup>
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { trackInteraction } from '@/lib/tracker';
import { Link } from '@inertiajs/vue3';
import { PlayCircle, Users, Star } from 'lucide-vue-next';

const props = defineProps({
    id: Number,
    slug: String,
    title: String,
    description: String,
    price: String,
    category: String,
    thumbnail: String,
    isEnrolled: Boolean,
});

const handleView = () => {
    trackInteraction('view_details', props.id, 'App\\Models\\Course');
};
</script>

<template>
    <Card class="group border-zinc-200 shadow-none rounded-lg overflow-hidden flex flex-col bg-white hover:border-zinc-400 transition-all duration-300">
        <!-- Thumbnail Area -->
        <div class="aspect-video relative bg-zinc-100 overflow-hidden border-b border-zinc-100">
            <img v-if="thumbnail" :src="thumbnail" :alt="title" class="h-full w-full object-cover transition-transform group-hover:scale-110 duration-700" />
            <div v-else class="h-full w-full flex items-center justify-center text-zinc-300">
                <PlayCircle class="h-10 w-10 opacity-20" />
            </div>
            <div class="absolute top-2 left-2 flex gap-1.5">
                <Badge variant="secondary" class="h-4 text-[8px] font-black uppercase tracking-widest px-2 bg-white/90 backdrop-blur-sm border-none text-zinc-900 shadow-sm">
                    {{ category }}
                </Badge>
            </div>
            <div v-if="isEnrolled" class="absolute inset-0 bg-zinc-900/40 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="secondary" class="h-8 text-[10px] font-black rounded-full px-4 shadow-xl">
                    مواصلة التعلم
                </Button>
            </div>
        </div>
        
        <CardHeader class="p-3 space-y-1">
            <div class="flex items-center gap-1 mb-0.5">
                <div class="flex items-center text-amber-400">
                    <Star class="h-2.5 w-2.5 fill-amber-400" />
                    <Star class="h-2.5 w-2.5 fill-amber-400" />
                    <Star class="h-2.5 w-2.5 fill-amber-400" />
                    <Star class="h-2.5 w-2.5 fill-amber-400" />
                    <Star class="h-2.5 w-2.5 fill-amber-400/30" />
                </div>
                <span class="text-[9px] font-black text-zinc-300">(4.8)</span>
            </div>
            <CardTitle class="text-[12px] font-bold text-zinc-900 line-clamp-1 group-hover:text-emerald-600 transition-colors leading-tight">{{ title }}</CardTitle>
            <CardDescription class="text-[10px] line-clamp-2 h-7 leading-relaxed text-zinc-400 font-medium">
                {{ description }}
            </CardDescription>
        </CardHeader>

        <CardFooter class="p-3 pt-0 mt-auto border-t border-zinc-50 bg-zinc-50/20 flex items-center justify-between">
            <div class="text-[12px] font-black text-zinc-900">
                {{ price }}
            </div>
            <Link :href="route('courses.show', { slug: props.slug })" class="shrink-0">
                <Button @click="handleView" variant="ghost" size="sm" class="h-7 text-[10px] font-black hover:bg-zinc-900 hover:text-white rounded-md px-3 transition-all">
                    {{ isEnrolled ? 'دخلت' : 'التفاصيل' }}
                </Button>
            </Link>
        </CardFooter>
    </Card>
</template>
